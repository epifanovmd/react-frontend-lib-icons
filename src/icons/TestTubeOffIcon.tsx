import React, { FC, memo } from 'react';
import TestTubeOffSvg from '../svg/test-tube-off.svg';

export interface ITestTubeOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TestTubeOffIcon: FC<ITestTubeOffIconProps> = memo(props => {
  return <TestTubeOffSvg {...props} />;
});
