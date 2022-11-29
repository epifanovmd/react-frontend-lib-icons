import React, { FC, memo } from 'react';
import ArchiveEditSvg from '../svg/archive-edit.svg';

export interface IArchiveEditIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArchiveEditIcon: FC<IArchiveEditIconProps> = memo(props => {
  return <ArchiveEditSvg {...props} />;
});
