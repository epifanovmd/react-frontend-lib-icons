import React, { FC, memo } from 'react';
import AlphaWCircleOutlineSvg from '../svg/alpha-w-circle-outline.svg';

export interface IAlphaWCircleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaWCircleOutlineIcon: FC<IAlphaWCircleOutlineIconProps> = memo(props => {
  return <AlphaWCircleOutlineSvg {...props} />;
});
