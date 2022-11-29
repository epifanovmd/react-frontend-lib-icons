import React, { FC, memo } from 'react';
import ArchiveRemoveOutlineSvg from '../svg/archive-remove-outline.svg';

export interface IArchiveRemoveOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArchiveRemoveOutlineIcon: FC<IArchiveRemoveOutlineIconProps> = memo(props => {
  return <ArchiveRemoveOutlineSvg {...props} />;
});
