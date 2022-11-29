import React, { FC, memo } from 'react';
import TestTubeSvg from '../svg/test-tube.svg';

export interface ITestTubeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TestTubeIcon: FC<ITestTubeIconProps> = memo(props => {
  return <TestTubeSvg {...props} />;
});
