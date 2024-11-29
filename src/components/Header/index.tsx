import Image from 'next/image';
import Link from 'next/link';

import LogoImg from '@/assets/logo.svg';
import SearchIcon from '@/assets/icon-search.svg';
import IconUser from '@/assets/icon-user.svg';
import { GridContainer } from '../GridContainer';

const arrayMenyu = [
    {"href": "#", "menu": 'Início'},
    {"href": "#", "menu": 'Benefícios'},
    {"href": "#", "menu": 'Para quem é o curso?'},
    {"href": "#", "menu": 'Preços promocionais'},
    {"href": "#", "menu": 'Sobre nó'},
];

export function Header() {
    const activedStyle = 'bg-green-actived text-opacity-100 rounded-full';
    return (
        <header className='container relative w-full bg-green-primary flex items-center'>
            <GridContainer className='flex items-center justify-between'>
                <Image src={LogoImg} alt='logo'/>
                <div className='flex items-center gap-20'>
                    <nav className='flex gap-2'>
                        {
                            arrayMenyu.map( (item, key) => (
                                <Link 
                                    key={key} 
                                    href={item.href} 
                                    className={`px-3 py-1 text-white text-opacity-40 hover:text-opacity-100 transition-all ${ key === 0 ? activedStyle : ''}`}
                                >
                                    {item.menu}
                                </Link>
                            ))
                        }
                    </nav>
                </div>
                <div className='flex items-center gap-6' >
                    <button>
                        <Image src={SearchIcon} alt='Icon Search' />
                    </button>
                    <button className='flex items-center gap-2' >
                        <Image src={IconUser} alt='Icon User' />
                        <span className='text-white font-medium'>Fazer login</span>
                    </button>
                </div>
            </GridContainer>
        </header>
    )
}