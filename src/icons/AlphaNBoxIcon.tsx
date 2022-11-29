import React, { FC, memo } from 'react';
import AlphaNBoxSvg from '../svg/alpha-n-box.svg';

export interface IAlphaNBoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaNBoxIcon: FC<IAlphaNBoxIconProps> = memo(props => {
  return <AlphaNBoxSvg {...props} />;
});
