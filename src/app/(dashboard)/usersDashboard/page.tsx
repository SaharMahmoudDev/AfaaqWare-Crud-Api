"use client";

// LOCAL COMPONENTS
import { Header } from "@/shared/components/organisms/Header";
import { Sidebar } from "@/shared/components/organisms/Sidebar";
import { UserActionsSection } from "@/modules/users/components/UserActionsSection";
import { UsersTableSection } from "@/modules/users/components/UsersTableSection";
import { UserDetails } from "@/modules/users/components/UserDetails";
import { UserForm } from "@/modules/users/components/UserForm";
import { Card } from "@/shared/components/atoms/Card";
import { useUsersDashboard } from "@/modules/users/hooks/useUsersDashboard";

export default function UsersDashboard() {
  const {
    users,
    search,
    setSearch,
    currentPage,
    setCurrentPage,
    detailsUser,
    handleView,
    handleDelete,
    handleEdit,
    resetUpdateForm,
    updateValues,
    editUserId,
    handleUpdateChange,
    handleUpdateSubmit,
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
    refs: { tableRef, detailsUserRef, updateUserRef },
  } = useUsersDashboard();

  return (
    <Card
      className="container relative mx-auto flex lg:my-10 bg-sidebar "
      padding="none"
      rounded="xl"
      shadow="md"
    >
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      <div className="flex min-w-0 flex-1 flex-col">
        <Header
          searchValue={search}
          onSearchChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <main className="flex-1 space-y-6 p-4 md:p-6">
          <UserActionsSection />

          <section className="grid gap-6 min-w-0 xl:grid-cols-[2fr_1fr]">
            <div className="min-w-0 space-y-6">
              <UsersTableSection
                users={users}
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
                onView={handleView}
                onEdit={handleEdit}
                onDelete={handleDelete}
                isLoading={penddingUsers}
                tableRef={tableRef}
                deletingUserId={deletingUserId}
              />

              <UserForm
                mode="create"
                values={createValues}
                onChange={handleCreateChange}
                onSubmit={handleCreateSubmit}
                isLoading={pendingCreateUser}
                resetForm={resetCreateForm}
                disabled={
                  pendingCreateUser ||
                  createValues.name === "" ||
                  createValues.email === "" ||
                  createValues.password === ""
                }
              />
            </div>

            <div className="space-y-6">
              <UserDetails
                user={detailsUser}
                isLoading={false}
                resetDetailsUser={resetDetailsUser}
                ref={detailsUserRef}
              />

              <UserForm
                mode="update"
                values={updateValues}
                onChange={handleUpdateChange}
                onSubmit={handleUpdateSubmit}
                isLoading={pendingUpdateUser}
                resetForm={resetUpdateForm}
                disabled={
                  pendingUpdateUser ||
                  editUserId === null ||
                  updateValues.email === "" ||
                  updateValues.name === "" ||
                  !isDirty
                }
                ref={updateUserRef}
              />
            </div>
          </section>
        </main>
      </div>
    </Card>
  );
}
