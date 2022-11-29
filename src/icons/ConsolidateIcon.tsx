import React, { FC, memo } from 'react';
import ConsolidateSvg from '../svg/consolidate.svg';

export interface IConsolidateIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ConsolidateIcon: FC<IConsolidateIconProps> = memo(props => {
  return <ConsolidateSvg {...props} />;
});
