import React, { FC, memo } from 'react';
import TransitSkipSvg from '../svg/transit-skip.svg';

export interface ITransitSkipIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TransitSkipIcon: FC<ITransitSkipIconProps> = memo(props => {
  return <TransitSkipSvg {...props} />;
});
