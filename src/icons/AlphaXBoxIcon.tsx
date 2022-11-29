import React, { FC, memo } from 'react';
import AlphaXBoxSvg from '../svg/alpha-x-box.svg';

export interface IAlphaXBoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaXBoxIcon: FC<IAlphaXBoxIconProps> = memo(props => {
  return <AlphaXBoxSvg {...props} />;
});
