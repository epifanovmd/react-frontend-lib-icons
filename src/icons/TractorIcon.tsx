import React, { FC, memo } from 'react';
import TractorSvg from '../svg/tractor.svg';

export interface ITractorIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TractorIcon: FC<ITractorIconProps> = memo(props => {
  return <TractorSvg {...props} />;
});
