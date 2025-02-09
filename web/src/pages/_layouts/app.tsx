import { Outlet } from 'react-router-dom'
import { AppSidebar } from '@/components/sidebar'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'


export function AppLayout() {
  return (
    <>
      <SidebarProvider>
        <div>
          <AppSidebar />
        </div>
        <div className='w-full'>
          <header className='w-full flex justify-between bg-primary-foreground'>
            <SidebarTrigger />
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>user</AvatarFallback>
            </Avatar>
          </header>

          <Outlet />

          <footer className="bg-primary-foreground">
            <span className="text-xs text-gray-400 py-4 text-center block">
              lfqcamargo@gmail.com
            </span>
          </footer>
        </div>
      </SidebarProvider>
    </>
  )
}
