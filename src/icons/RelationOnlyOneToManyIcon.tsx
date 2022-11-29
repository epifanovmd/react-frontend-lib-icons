import React, { FC, memo } from 'react';
import RelationOnlyOneToManySvg from '../svg/relation-only-one-to-many.svg';

export interface IRelationOnlyOneToManyIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RelationOnlyOneToManyIcon: FC<IRelationOnlyOneToManyIconProps> = memo(props => {
  return <RelationOnlyOneToManySvg {...props} />;
});
