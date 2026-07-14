"use client";

import { useId, useState } from "react";

export type AccordionItemData = {
  id: string;
  trigger: React.ReactNode;
  content: React.ReactNode;
};

type AccordionProps = {
  items: AccordionItemData[];
  /** id of the item open by default, or null for none open. Single-open accordion. */
  defaultOpenId?: string | null;
  className?: string;
  itemClassName?: string;
  triggerClassName?: string;
  panelClassName?: string;
};

export function Accordion({
  items,
  defaultOpenId = null,
  className,
  itemClassName,
  triggerClassName,
  panelClassName,
}: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId);
  const baseId = useId();

  return (
    <div className={className}>
      {items.map((item) => {
        const isOpen = openId === item.id;
        const triggerId = `${baseId}-${item.id}-trigger`;
        const panelId = `${baseId}-${item.id}-panel`;

        return (
          <div key={item.id} className={itemClassName}>
            <h3 className="m-0">
              <button
                id={triggerId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenId(isOpen ? null : item.id)}
                className={triggerClassName}
              >
                {item.trigger}
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={triggerId}
              hidden={!isOpen}
              className={panelClassName}
            >
              {item.content}
            </div>
          </div>
        );
      })}
    </div>
  );
}
