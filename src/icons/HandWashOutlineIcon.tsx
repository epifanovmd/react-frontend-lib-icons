import React, { FC, memo } from 'react';
import HandWashOutlineSvg from '../svg/hand-wash-outline.svg';

export interface IHandWashOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HandWashOutlineIcon: FC<IHandWashOutlineIconProps> = memo(props => {
  return <HandWashOutlineSvg {...props} />;
});
