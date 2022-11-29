import React, { FC, memo } from 'react';
import ArchivePlusOutlineSvg from '../svg/archive-plus-outline.svg';

export interface IArchivePlusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArchivePlusOutlineIcon: FC<IArchivePlusOutlineIconProps> = memo(props => {
  return <ArchivePlusOutlineSvg {...props} />;
});
