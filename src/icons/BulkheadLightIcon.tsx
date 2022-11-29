import React, { FC, memo } from 'react';
import BulkheadLightSvg from '../svg/bulkhead-light.svg';

export interface IBulkheadLightIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BulkheadLightIcon: FC<IBulkheadLightIconProps> = memo(props => {
  return <BulkheadLightSvg {...props} />;
});
