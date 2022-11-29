import React, { FC, memo } from 'react';
import AlphaNSvg from '../svg/alpha-n.svg';

export interface IAlphaNIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaNIcon: FC<IAlphaNIconProps> = memo(props => {
  return <AlphaNSvg {...props} />;
});
