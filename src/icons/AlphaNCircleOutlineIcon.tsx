import React, { FC, memo } from 'react';
import AlphaNCircleOutlineSvg from '../svg/alpha-n-circle-outline.svg';

export interface IAlphaNCircleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaNCircleOutlineIcon: FC<IAlphaNCircleOutlineIconProps> = memo(props => {
  return <AlphaNCircleOutlineSvg {...props} />;
});
