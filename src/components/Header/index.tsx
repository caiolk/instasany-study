import Image from 'next/image';
import Link from 'next/link';

import LogoImg from '@/assets/logo.svg';
import SearchIcon from '@/assets/icon-search.svg';
import IconUser from '@/assets/icon-user.svg';
import { GridContainer } from '../GridContainer';

export function Header() {
    return (
        <header className='relative w-full bg-green-primary flex items-center'>
            <GridContainer>
                <Image src={LogoImg} alt='logo'/>
                <div>
                    <nav>
                        <Link href="#">Inícip</Link>
                        <Link href="#">Benefícios</Link>
                        <Link href="#">Para quem é o curso?</Link>
                        <Link href="#">Preços promocionais</Link>
                        <Link href="#">Sobre nós</Link>
                    </nav>
                </div>
                <div>
                    <button>
                        <Image src={SearchIcon} alt='Icon Search' />
                    </button>
                    <button>
                        <Image src={IconUser} alt='Icon User' />
                        <span>Fazer login</span>
                    </button>
                </div>
            </GridContainer>
        </header>
    )
}