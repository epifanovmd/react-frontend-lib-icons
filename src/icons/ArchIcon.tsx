import React, { FC, memo } from 'react';
import ArchSvg from '../svg/arch.svg';

export interface IArchIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArchIcon: FC<IArchIconProps> = memo(props => {
  return <ArchSvg {...props} />;
});
