interface BreadcrumbItemData {
  label: string
  href?: string
}

interface DynamicBreadcrumbProps {
  items: BreadcrumbItemData[]
}

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export function DynamicBreadcrumb({ items }: DynamicBreadcrumbProps) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {items.map((item, index) => (
          <BreadcrumbItem key={index}>
            {item.href ? (
              <BreadcrumbLink
                href={item.href}
                style={{
                  fontFamily: '"DM Sans", "DM Sans Placeholder", sans-serif',
                  fontWeight: 600,           // número, não string
                  fontStyle: 'normal',
                  fontSize: '13px',
                  lineHeight: '1.1em',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                }}
              >
                {item.label}
              </BreadcrumbLink>
            ) : (
              <BreadcrumbPage
                style={{
                  fontFamily: '"DM Sans", "DM Sans Placeholder", sans-serif',
                  fontWeight: 600,
                  fontStyle: 'normal',
                  fontSize: '13px',
                  lineHeight: '1.1em',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                }}
              >
                {item.label}
              </BreadcrumbPage>
            )}
            {index < items.length - 1 && <BreadcrumbSeparator />}
          </BreadcrumbItem>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
