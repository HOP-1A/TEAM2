"use client";
import { Avatar, AvatarImage, AvatarFallback } from '@radix-ui/react-avatar';

const Page = () => {
    const currentPath = window.location.pathname;

    const settingsItems = [
        { src: "https://cdn-icons-png.flaticon.com/512/563/563541.png", label: "Хувийн мэдээлэл", path: '/settings' },
        { src: "https://cdn-icons-png.flaticon.com/512/638/638456.png", label: "Миний зар", path: '/zar' },
        { src: "https://cdn-icons-png.flaticon.com/512/2697/2697432.png", label: "Миний дэлгүүр", path: '/stores' },
        { src: "https://static.thenounproject.com/png/25603-200.png", label: "Миний захиалгууд", path: '/orders' },
        { src: "https://cdn-icons-png.flaticon.com/512/493/493389.png", label: "Хэтэвч", path: '/wallet' },
        { src: "https://cdn-icons-png.flaticon.com/512/61/61225.png", label: "Хуваан төлөлт /хүсэлт/", path: '/afterpay' },
        { src: "https://cdn-icons-png.flaticon.com/512/7046/7046204.png", label: "Системээс гарах", path: '()' } // not used
    ];

    return (
        <div className='box flexcolumn'>
            <div className='flexrow' style={{ gap: "4px" }}>
                <Avatar className="w-16 h-16"> 
                    <AvatarImage src='https://cdn-icons-png.flaticon.com/512/9218/9218712.png' alt="User Avatar" />
                    <AvatarFallback>
                        <div className="flex items-center justify-center text-center"> 
                            <AvatarImage src='https://www.shutterstock.com/image-vector/default-avatar-profile-icon-vector-600nw-1706867365.jpg' alt="Default Avatar" />
                        </div>
                    </AvatarFallback>
                </Avatar>
                <div className='flexcolumn'>
                    <div>Example Name</div>
                    <div>Example date</div>
                </div>
            </div>
            <hr style={{ border: 'none', borderTop: '2px solid red', margin: '8px 0' }} />
            <div>
                {settingsItems.map(item => (
                    <div 
                      key={item.label} 
                      className="settings-item" 
                      style={{ backgroundColor: currentPath.includes(item.path) ? 'gainsboro' : 'transparent' }} 
                    >
                        <img src={item.src} alt={item.label} className="settings-icon" />
                        <span>{item.label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Page;