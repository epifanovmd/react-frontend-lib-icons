import React, { FC, memo } from 'react';
import TestTubeEmptySvg from '../svg/test-tube-empty.svg';

export interface ITestTubeEmptyIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TestTubeEmptyIcon: FC<ITestTubeEmptyIconProps> = memo(props => {
  return <TestTubeEmptySvg {...props} />;
});
