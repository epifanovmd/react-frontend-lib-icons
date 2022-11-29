import React, { FC, memo } from 'react';
import ArchiveEyeSvg from '../svg/archive-eye.svg';

export interface IArchiveEyeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArchiveEyeIcon: FC<IArchiveEyeIconProps> = memo(props => {
  return <ArchiveEyeSvg {...props} />;
});
