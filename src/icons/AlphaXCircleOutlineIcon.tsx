import React, { FC, memo } from 'react';
import AlphaXCircleOutlineSvg from '../svg/alpha-x-circle-outline.svg';

export interface IAlphaXCircleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaXCircleOutlineIcon: FC<IAlphaXCircleOutlineIconProps> = memo(props => {
  return <AlphaXCircleOutlineSvg {...props} />;
});
