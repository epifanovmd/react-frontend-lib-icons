import React, { FC, memo } from 'react';
import SeatIndividualSuiteSvg from '../svg/seat-individual-suite.svg';

export interface ISeatIndividualSuiteIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SeatIndividualSuiteIcon: FC<ISeatIndividualSuiteIconProps> = memo(props => {
  return <SeatIndividualSuiteSvg {...props} />;
});
