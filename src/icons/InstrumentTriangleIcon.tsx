import React, { FC, memo } from 'react';
import InstrumentTriangleSvg from '../svg/instrument-triangle.svg';

export interface IInstrumentTriangleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const InstrumentTriangleIcon: FC<IInstrumentTriangleIconProps> = memo(props => {
  return <InstrumentTriangleSvg {...props} />;
});
