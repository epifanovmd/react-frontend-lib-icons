import React, { FC, memo } from 'react';
import ArchiveCogOutlineSvg from '../svg/archive-cog-outline.svg';

export interface IArchiveCogOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArchiveCogOutlineIcon: FC<IArchiveCogOutlineIconProps> = memo(props => {
  return <ArchiveCogOutlineSvg {...props} />;
});
