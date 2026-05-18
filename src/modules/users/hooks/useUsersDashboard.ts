import { useRef, useState } from "react";

// EXTERNAL LIBIRARIES
import { useTranslations } from "next-intl";

// TYPES
import {
  type User,
  type InitialUpdateUser,
} from "@/modules/users/types/users.types";

// CONSTANTS

import {
  INITIAL_UPDATE_VALUES,
  INITIAL_CREATE_VALUES,
} from "@/modules/users/utils/data";

// HOOKS
import useGetUsers from "@/modules/users/hooks/useGetUsers";
import { useDeleteUser } from "@/modules/users/hooks/useDeleteUser";
import { useUpdateUser } from "@/modules/users/hooks/useUpdateUser";
import { useCreateUser } from "@/modules/users/hooks/useCreateUser";
import { useScrollToSection } from "@/shared/hooks/useScrollToSection";

// Helper
import { showConfirmAlert } from "@/shared/utils/showConfirmAlert";
import { handleFormChange } from "@/shared/utils/handleFormChange";
import { isSameData } from "@/shared/utils/isSameData";
import { showErrorToast, showSuccessToast } from "@/shared/utils/toast";

export const useUsersDashboard = () => {
  // TRANSLATIONS
  const t = useTranslations("notifications.dashboard.users");

  // SIDEBAR
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // SEARCH
  const [search, setSearch] = useState("");

  // PAGINATION
  const [currentPage, setCurrentPage] = useState(1);

  // VIEW DETAILS USER
  const [detailsUser, setDetailsUser] = useState<User | null>(null);
  const detailsUserRef = useRef<HTMLDivElement>(null);

  // UPDATE USER
  const [editUserId, setEditUserId] = useState<number | null>(null);
  const [updateValues, setUpdateValues] = useState(INITIAL_UPDATE_VALUES);
  const [initialEditData, setInitialEditData] =
    useState<InitialUpdateUser | null>(null);
  const updateUserRef = useRef<HTMLDivElement>(null);

  // DETETING USER
  const [deletingUserId, setDeletingUserId] = useState<number | null>(null);

  // CREATING USER
  const [createValues, setCreateValues] = useState(INITIAL_CREATE_VALUES);

  // SCROLL TO SECTION
  const scrollToSection = useScrollToSection();
  const tableRef = useRef<HTMLDivElement>(null);

  // GET USERS
  const limit = 10;
  const { data: usersData, isPending: penddingUsers } = useGetUsers({
    search,
    page: currentPage,
    limit,
  });
  const users = usersData?.users ?? [];

  // PAGINATION
  const totalPages = usersData?.totalPages || 0;

  // VIEW USER

  const handleView = (user: User) => {
    scrollToSection(detailsUserRef);

    setDetailsUser(user);
  };

  const resetDetailsUser = () => {
    setDetailsUser(null);
  };

  // Delete User
  const { mutate: deleteUser } = useDeleteUser();

  const handleDelete = async (user: User) => {
    if (deletingUserId) return;
    const result = await showConfirmAlert({
      title: t("deleteConfirmTitle"),
      text: t("deleteConfirmText"),
      confirmButtonText: t("confirmDelete"),
      cancelButtonText: t("cancelDelete"),
    });

    if (!result.isConfirmed) return;

    setDeletingUserId(user.id);

    deleteUser(user.id, {
      onSuccess: () => {
        showSuccessToast(t, "deleteSuccess");
      },
      onError: () => {
        showErrorToast(t, "deleteError");
      },
      onSettled: () => {
        setDeletingUserId(null);
      },
    });
  };

  // UPDATE USER

  const handleEdit = (user: User) => {
    scrollToSection(updateUserRef);
    setEditUserId(user.id);

    const data = {
      name: user.name,
      email: user.email,
    };

    setInitialEditData(data);

    setUpdateValues(data);
  };

  const resetUpdateForm = () => {
    setEditUserId(null);
    setInitialEditData(null);
    setUpdateValues(INITIAL_UPDATE_VALUES);
  };

  const handleUpdateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!editUserId) return;
    handleFormChange(setUpdateValues)(e);
  };

  const isDirty =
    initialEditData !== null && !isSameData(updateValues, initialEditData);

  const { mutate: updateUser, isPending: pendingUpdateUser } = useUpdateUser();

  const handleUpdateSubmit: React.SubmitEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (!editUserId || !isDirty) return;
    updateUser(
      { id: editUserId, data: updateValues },
      {
        onSuccess: () => {
          showSuccessToast(t, "updateSuccess");

          scrollToSection(tableRef);
        },
        onError: () => {
          showErrorToast(t, "updateError");
        },
        onSettled: () => {
          resetUpdateForm();
        },
      },
    );
  };

  // CREATE USER
  const handleCreateChange = handleFormChange(setCreateValues);

  const resetCreateForm = () => {
    setCreateValues(INITIAL_CREATE_VALUES);
  };
  const { mutate: createUser, isPending: pendingCreateUser } = useCreateUser();

  const handleCreateSubmit: React.SubmitEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    createUser(createValues, {
      onSuccess: () => {
        resetCreateForm();
        showSuccessToast(t, "createSuccess");
        scrollToSection(tableRef);
      },
      onError: () => {
        showErrorToast(t, "createError");
      },
    });
  };


  return {
    users,
    search,
    setSearch,
    currentPage,
    setCurrentPage,
    detailsUser,
    handleView,
    handleDelete,
    handleEdit,
    updateValues,
    editUserId,
    handleUpdateChange,
    handleUpdateSubmit,
    resetUpdateForm,
    createValues,
    handleCreateChange,
    handleCreateSubmit,
    resetCreateForm,
    isDirty,
    resetDetailsUser,
    pendingUpdateUser,
    pendingCreateUser,
    penddingUsers,
    deletingUserId,
    totalPages,
    isSidebarOpen,
    setIsSidebarOpen,
    refs: {
      tableRef,
      detailsUserRef,
      updateUserRef,
    },
  };
};
