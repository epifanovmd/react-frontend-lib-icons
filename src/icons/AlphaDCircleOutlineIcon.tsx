import React, { FC, memo } from 'react';
import AlphaDCircleOutlineSvg from '../svg/alpha-d-circle-outline.svg';

export interface IAlphaDCircleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaDCircleOutlineIcon: FC<IAlphaDCircleOutlineIconProps> = memo(props => {
  return <AlphaDCircleOutlineSvg {...props} />;
});
