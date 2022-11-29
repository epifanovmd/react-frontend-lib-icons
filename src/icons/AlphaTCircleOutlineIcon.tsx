import React, { FC, memo } from 'react';
import AlphaTCircleOutlineSvg from '../svg/alpha-t-circle-outline.svg';

export interface IAlphaTCircleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaTCircleOutlineIcon: FC<IAlphaTCircleOutlineIconProps> = memo(props => {
  return <AlphaTCircleOutlineSvg {...props} />;
});
