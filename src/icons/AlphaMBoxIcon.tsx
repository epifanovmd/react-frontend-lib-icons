import React, { FC, memo } from 'react';
import AlphaMBoxSvg from '../svg/alpha-m-box.svg';

export interface IAlphaMBoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaMBoxIcon: FC<IAlphaMBoxIconProps> = memo(props => {
  return <AlphaMBoxSvg {...props} />;
});
