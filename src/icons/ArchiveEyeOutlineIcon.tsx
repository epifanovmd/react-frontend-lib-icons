import React, { FC, memo } from 'react';
import ArchiveEyeOutlineSvg from '../svg/archive-eye-outline.svg';

export interface IArchiveEyeOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArchiveEyeOutlineIcon: FC<IArchiveEyeOutlineIconProps> = memo(props => {
  return <ArchiveEyeOutlineSvg {...props} />;
});
