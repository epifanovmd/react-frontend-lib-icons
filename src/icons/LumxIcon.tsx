import React, { FC, memo } from 'react';
import LumxSvg from '../svg/lumx.svg';

export interface ILumxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LumxIcon: FC<ILumxIconProps> = memo(props => {
  return <LumxSvg {...props} />;
});
