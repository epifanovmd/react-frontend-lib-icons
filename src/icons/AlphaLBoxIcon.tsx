import React, { FC, memo } from 'react';
import AlphaLBoxSvg from '../svg/alpha-l-box.svg';

export interface IAlphaLBoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaLBoxIcon: FC<IAlphaLBoxIconProps> = memo(props => {
  return <AlphaLBoxSvg {...props} />;
});
