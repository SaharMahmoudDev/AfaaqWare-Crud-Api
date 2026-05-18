"use client";

import { useTranslations } from "next-intl";

import { ActionCard } from "@/shared/components/molecules/ActionCard";

import { DASHBOARD_CARDS } from "@/modules/users/utils/data";

export function UserActionsSection() {
  const t = useTranslations("dashboard.cards");

  return (
    <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {DASHBOARD_CARDS.map((card) => (
        <ActionCard
          key={card.id}
          icon={card.icon}
          variant={card.variant}
          title={t(`${card.translationKey}.title`)}
          description={t(
            `${card.translationKey}.description`,
          )}
          buttonLabel={t(
            `${card.translationKey}.action`,
          )}
        />
      ))}
    </section>
  );
}