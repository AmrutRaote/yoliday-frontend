
function Navbar ()
{
    return (
        <>
            <div className="hidden p-3 bg-white sm:block">
                <div className="flex items-center justify-end gap-5 ">
                    <img src="/iconoir_bell.png" className="h-[24px] " alt="iconoir_bell" />
                    <img src="/header_profile.png" alt="header_profile" />
                    <div >
                        <h2 className="font-semibold">Lorem Ips</h2>
                        <h2 className="text-sm text-slate-400">Manager</h2>
                    </div>
                    <img src="/drop-down.png" className="items-start" alt="header_profile" />
                </div>
            </div>

            <div className="block p-3 bg-white sm:hidden">
                <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-semibold">Portfolio</h2>
                    <div className="flex gap-5">
                        <img className="size-6" src="/mobile/cart_mobile.png" alt="shopping cart" />
                        <img className="size-6" src="/mobile/bell_notification_mobile.png" alt="Bell" />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Navbar
