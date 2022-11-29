import React, { FC, memo } from 'react';
import ArchivePlusSvg from '../svg/archive-plus.svg';

export interface IArchivePlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArchivePlusIcon: FC<IArchivePlusIconProps> = memo(props => {
  return <ArchivePlusSvg {...props} />;
});
