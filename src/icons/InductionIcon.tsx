import React, { FC, memo } from 'react';
import InductionSvg from '../svg/induction.svg';

export interface IInductionIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const InductionIcon: FC<IInductionIconProps> = memo(props => {
  return <InductionSvg {...props} />;
});
