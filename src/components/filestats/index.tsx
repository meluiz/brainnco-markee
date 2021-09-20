/* ------| Estilos |------ */
import { SavedIcon, SavingIcon } from 'components/icons'
import { Editing, Wrapper } from './styles'

/* ------| Tipagem |------ */
type FileStatsType = {
  stats: 'editing' | 'saving' | 'saved'
}

export const FileStats = ({ stats }: FileStatsType) => {
  return (
    <Wrapper>
      {stats === 'editing' && <Editing />}
      {stats === 'saving' && <SavingIcon size={13} />}
      {stats === 'saved' && <SavedIcon size={13} />}
    </Wrapper>
  )
}
