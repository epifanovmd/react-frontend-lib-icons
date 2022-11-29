import React, { FC, memo } from 'react';
import RelationZeroOrOneToZeroOrOneSvg from '../svg/relation-zero-or-one-to-zero-or-one.svg';

export interface IRelationZeroOrOneToZeroOrOneIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RelationZeroOrOneToZeroOrOneIcon: FC<IRelationZeroOrOneToZeroOrOneIconProps> = memo(props => {
  return <RelationZeroOrOneToZeroOrOneSvg {...props} />;
});
