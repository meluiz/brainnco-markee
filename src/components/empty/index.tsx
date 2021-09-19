/* ------| Media |------ */
import noFilesImage from 'media/img/no-files.png'

/* ------| Estilos |------ */
import { Image, Title, Wrapper } from './styles'

export const EmptyContent = () => {
  return (
    <Wrapper>
      <Image src={noFilesImage} alt='Arquivos não encontrado' />
      <Title>Arquivos não encontrado</Title>
    </Wrapper>
  )
}
