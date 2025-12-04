"use client"

import * as React from "react"
import {
  IconMessageCircle,
  IconLayoutDashboard,
  IconHistory,
  IconCreditCard,
  IconPaw,
} from "@tabler/icons-react"

import { NavMain } from "@/components/nav-main"
import { NavHistory } from "@/components/nav-history"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Link from "next/link"

const data = {
  user: {
    name: "John Doe",
    email: "john@example.com",
    avatar: "/avatars/user.jpg",
  },
  navMain: [
    {
      title: "AI Agent",
      url: "/chat",
      icon: IconMessageCircle,
      special: true,
    },
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: IconLayoutDashboard,
    },
    {
      title: "Previous History",
      url: "/history",
      icon: IconHistory,
    },
    {
      title: "Subscriptions",
      url: "/subscriptions",
      icon: IconCreditCard,
    },
  ],
  navHistory: [
    {
      title: "Dog limping assessment",
      url: "/chat/1",
      date: "Today",
    },
    {
      title: "Cat not eating",
      url: "/chat/2",
      date: "Yesterday",
    },
    {
      title: "Puppy vaccination schedule",
      url: "/chat/3",
      date: "2 days ago",
    },
    {
      title: "Dietary advice for senior dog",
      url: "/chat/4",
      date: "Last week",
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5 cursor-pointer"
            >
              <Link href="/">
                <IconPaw className="!size-5 text-primary" />
                <span className="text-base font-semibold">Vet AI</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavHistory items={data.navHistory} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
