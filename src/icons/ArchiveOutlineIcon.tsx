import React, { FC, memo } from 'react';
import ArchiveOutlineSvg from '../svg/archive-outline.svg';

export interface IArchiveOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArchiveOutlineIcon: FC<IArchiveOutlineIconProps> = memo(props => {
  return <ArchiveOutlineSvg {...props} />;
});
