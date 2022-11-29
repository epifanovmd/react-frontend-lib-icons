import React, { FC, memo } from 'react';
import AlphaTSvg from '../svg/alpha-t.svg';

export interface IAlphaTIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaTIcon: FC<IAlphaTIconProps> = memo(props => {
  return <AlphaTSvg {...props} />;
});
