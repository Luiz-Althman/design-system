import { User } from 'phosphor-react';
import { AvatarContainer, AvatarFallback, AvatarImage } from './styles';
import { ComponentProps } from 'react';

export interface AvatarProps extends ComponentProps<typeof AvatarImage> {}

export function Avatar(props: AvatarProps) {
    return (
        <AvatarContainer>
            <AvatarImage {...props} />

            <AvatarFallback delayMs={600}>
                {/** Ele vai demorar (delayMs) 600ms para aparecer. Isso serve para o Fallback não aparecer instantaneamente. Já que ao abrir a página, a imagem do usuário pode ser carregada ainda.*/}
                <User />
            </AvatarFallback>
        </AvatarContainer>
    );
}

Avatar.displayName = 'Avatar';
