import React, { FC, memo } from 'react';
import AlphaNBoxOutlineSvg from '../svg/alpha-n-box-outline.svg';

export interface IAlphaNBoxOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaNBoxOutlineIcon: FC<IAlphaNBoxOutlineIconProps> = memo(props => {
  return <AlphaNBoxOutlineSvg {...props} />;
});
