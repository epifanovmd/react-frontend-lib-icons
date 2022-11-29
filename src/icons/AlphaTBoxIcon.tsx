import React, { FC, memo } from 'react';
import AlphaTBoxSvg from '../svg/alpha-t-box.svg';

export interface IAlphaTBoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaTBoxIcon: FC<IAlphaTBoxIconProps> = memo(props => {
  return <AlphaTBoxSvg {...props} />;
});
