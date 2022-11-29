import React, { FC, memo } from 'react';
import SmartCardReaderOutlineSvg from '../svg/smart-card-reader-outline.svg';

export interface ISmartCardReaderOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SmartCardReaderOutlineIcon: FC<ISmartCardReaderOutlineIconProps> = memo(props => {
  return <SmartCardReaderOutlineSvg {...props} />;
});
