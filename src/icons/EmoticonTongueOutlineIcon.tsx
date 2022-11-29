import React, { FC, memo } from 'react';
import EmoticonTongueOutlineSvg from '../svg/emoticon-tongue-outline.svg';

export interface IEmoticonTongueOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EmoticonTongueOutlineIcon: FC<IEmoticonTongueOutlineIconProps> = memo(props => {
  return <EmoticonTongueOutlineSvg {...props} />;
});
