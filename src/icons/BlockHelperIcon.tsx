import React, { FC, memo } from 'react';
import BlockHelperSvg from '../svg/block-helper.svg';

export interface IBlockHelperIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BlockHelperIcon: FC<IBlockHelperIconProps> = memo(props => {
  return <BlockHelperSvg {...props} />;
});
