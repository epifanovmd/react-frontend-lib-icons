import React, { FC, memo } from 'react';
import AlphaPBoxSvg from '../svg/alpha-p-box.svg';

export interface IAlphaPBoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaPBoxIcon: FC<IAlphaPBoxIconProps> = memo(props => {
  return <AlphaPBoxSvg {...props} />;
});
