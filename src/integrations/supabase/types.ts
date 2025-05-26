export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      achievements: {
        Row: {
          category: string
          client_id: string
          created_at: string
          criteria: Json
          desc_translations: Json | null
          description: string
          id: string
          image_url: string | null
          is_global: boolean
          name: string
          name_translations: Json | null
          points: number
          updated_at: string
        }
        Insert: {
          category: string
          client_id: string
          created_at?: string
          criteria: Json
          desc_translations?: Json | null
          description: string
          id?: string
          image_url?: string | null
          is_global?: boolean
          name: string
          name_translations?: Json | null
          points: number
          updated_at?: string
        }
        Update: {
          category?: string
          client_id?: string
          created_at?: string
          criteria?: Json
          desc_translations?: Json | null
          description?: string
          id?: string
          image_url?: string | null
          is_global?: boolean
          name?: string
          name_translations?: Json | null
          points?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "achievements_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "clients"
            referencedColumns: ["id"]
          },
        ]
      }
      clients: {
        Row: {
          active: boolean
          ai_api_key: string | null
          ai_provider: string
          brand_name: string
          contact_phone: string | null
          created_at: string
          domain: string | null
          enabled_features: string[] | null
          favicon_url: string | null
          id: string
          logo_url: string | null
          name: string
          primary_color: string
          privacy_url: string | null
          secondary_color: string
          stripe_customer_id: string | null
          support_email: string
          terms_url: string | null
          updated_at: string
        }
        Insert: {
          active?: boolean
          ai_api_key?: string | null
          ai_provider?: string
          brand_name: string
          contact_phone?: string | null
          created_at?: string
          domain?: string | null
          enabled_features?: string[] | null
          favicon_url?: string | null
          id?: string
          logo_url?: string | null
          name: string
          primary_color?: string
          privacy_url?: string | null
          secondary_color?: string
          stripe_customer_id?: string | null
          support_email: string
          terms_url?: string | null
          updated_at?: string
        }
        Update: {
          active?: boolean
          ai_api_key?: string | null
          ai_provider?: string
          brand_name?: string
          contact_phone?: string | null
          created_at?: string
          domain?: string | null
          enabled_features?: string[] | null
          favicon_url?: string | null
          id?: string
          logo_url?: string | null
          name?: string
          primary_color?: string
          privacy_url?: string | null
          secondary_color?: string
          stripe_customer_id?: string | null
          support_email?: string
          terms_url?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      food_items: {
        Row: {
          barcode: string | null
          brand_name: string | null
          calories: number
          carbs: number
          client_id: string | null
          created_at: string
          fat: number
          fiber: number | null
          food_group: string
          id: string
          image_url: string | null
          is_global: boolean
          is_processed: boolean
          name: string
          protein: number
          updated_at: string
        }
        Insert: {
          barcode?: string | null
          brand_name?: string | null
          calories: number
          carbs: number
          client_id?: string | null
          created_at?: string
          fat: number
          fiber?: number | null
          food_group: string
          id?: string
          image_url?: string | null
          is_global?: boolean
          is_processed?: boolean
          name: string
          protein: number
          updated_at?: string
        }
        Update: {
          barcode?: string | null
          brand_name?: string | null
          calories?: number
          carbs?: number
          client_id?: string | null
          created_at?: string
          fat?: number
          fiber?: number | null
          food_group?: string
          id?: string
          image_url?: string | null
          is_global?: boolean
          is_processed?: boolean
          name?: string
          protein?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "food_items_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "clients"
            referencedColumns: ["id"]
          },
        ]
      }
      meal_items: {
        Row: {
          calories: number | null
          carbs: number | null
          created_at: string
          fat: number | null
          fiber: number | null
          food_group: string | null
          food_item_id: string | null
          id: string
          is_processed: boolean | null
          meal_record_id: string
          name: string
          portion: number
          portion_unit: string
          protein: number | null
          updated_at: string
        }
        Insert: {
          calories?: number | null
          carbs?: number | null
          created_at?: string
          fat?: number | null
          fiber?: number | null
          food_group?: string | null
          food_item_id?: string | null
          id?: string
          is_processed?: boolean | null
          meal_record_id: string
          name: string
          portion: number
          portion_unit: string
          protein?: number | null
          updated_at?: string
        }
        Update: {
          calories?: number | null
          carbs?: number | null
          created_at?: string
          fat?: number | null
          fiber?: number | null
          food_group?: string | null
          food_item_id?: string | null
          id?: string
          is_processed?: boolean | null
          meal_record_id?: string
          name?: string
          portion?: number
          portion_unit?: string
          protein?: number | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "meal_items_food_item_id_fkey"
            columns: ["food_item_id"]
            isOneToOne: false
            referencedRelation: "food_items"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "meal_items_meal_record_id_fkey"
            columns: ["meal_record_id"]
            isOneToOne: false
            referencedRelation: "meal_records"
            referencedColumns: ["id"]
          },
        ]
      }
      meal_records: {
        Row: {
          ai_analysis: Json | null
          calories: number | null
          carbs: number | null
          created_at: string
          description: string | null
          fat: number | null
          feedback: string | null
          fiber: number | null
          id: string
          image_url: string | null
          input_method: string
          is_template: boolean
          meal_time: string
          meal_type: string
          protein: number | null
          source: string
          template_name: string | null
          updated_at: string
          user_id: string
          user_rating: number | null
        }
        Insert: {
          ai_analysis?: Json | null
          calories?: number | null
          carbs?: number | null
          created_at?: string
          description?: string | null
          fat?: number | null
          feedback?: string | null
          fiber?: number | null
          id?: string
          image_url?: string | null
          input_method?: string
          is_template?: boolean
          meal_time: string
          meal_type: string
          protein?: number | null
          source?: string
          template_name?: string | null
          updated_at?: string
          user_id: string
          user_rating?: number | null
        }
        Update: {
          ai_analysis?: Json | null
          calories?: number | null
          carbs?: number | null
          created_at?: string
          description?: string | null
          fat?: number | null
          feedback?: string | null
          fiber?: number | null
          id?: string
          image_url?: string | null
          input_method?: string
          is_template?: boolean
          meal_time?: string
          meal_type?: string
          protein?: number | null
          source?: string
          template_name?: string | null
          updated_at?: string
          user_id?: string
          user_rating?: number | null
        }
        Relationships: []
      }
      plans: {
        Row: {
          client_id: string
          created_at: string
          description: string
          features: string[]
          id: string
          interval_unit: string
          is_active: boolean
          name: string
          price: number
          stripe_price_id: string | null
          stripe_product_id: string | null
          updated_at: string
        }
        Insert: {
          client_id: string
          created_at?: string
          description: string
          features: string[]
          id?: string
          interval_unit: string
          is_active?: boolean
          name: string
          price: number
          stripe_price_id?: string | null
          stripe_product_id?: string | null
          updated_at?: string
        }
        Update: {
          client_id?: string
          created_at?: string
          description?: string
          features?: string[]
          id?: string
          interval_unit?: string
          is_active?: boolean
          name?: string
          price?: number
          stripe_price_id?: string | null
          stripe_product_id?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "plans_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "clients"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          activity_level: string | null
          birth_date: string | null
          bmr: number | null
          body_fat_percentage: number | null
          client_id: string
          created_at: string
          current_weight: number | null
          dietary_restrictions: string[] | null
          email: string | null
          food_preferences: string[] | null
          gender: string | null
          goal: string | null
          height: number | null
          hip_circumference: number | null
          id: string
          language_preference: string
          measurement_system: string
          name: string | null
          profile_picture_url: string | null
          role: string
          target_weight: number | null
          tdee: number | null
          updated_at: string
          user_id: string
          waist_circumference: number | null
          whatsapp_number: string | null
        }
        Insert: {
          activity_level?: string | null
          birth_date?: string | null
          bmr?: number | null
          body_fat_percentage?: number | null
          client_id: string
          created_at?: string
          current_weight?: number | null
          dietary_restrictions?: string[] | null
          email?: string | null
          food_preferences?: string[] | null
          gender?: string | null
          goal?: string | null
          height?: number | null
          hip_circumference?: number | null
          id?: string
          language_preference?: string
          measurement_system?: string
          name?: string | null
          profile_picture_url?: string | null
          role?: string
          target_weight?: number | null
          tdee?: number | null
          updated_at?: string
          user_id: string
          waist_circumference?: number | null
          whatsapp_number?: string | null
        }
        Update: {
          activity_level?: string | null
          birth_date?: string | null
          bmr?: number | null
          body_fat_percentage?: number | null
          client_id?: string
          created_at?: string
          current_weight?: number | null
          dietary_restrictions?: string[] | null
          email?: string | null
          food_preferences?: string[] | null
          gender?: string | null
          goal?: string | null
          height?: number | null
          hip_circumference?: number | null
          id?: string
          language_preference?: string
          measurement_system?: string
          name?: string | null
          profile_picture_url?: string | null
          role?: string
          target_weight?: number | null
          tdee?: number | null
          updated_at?: string
          user_id?: string
          waist_circumference?: number | null
          whatsapp_number?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "clients"
            referencedColumns: ["id"]
          },
        ]
      }
      subscriptions: {
        Row: {
          created_at: string
          end_date: string | null
          id: string
          last_payment_date: string | null
          next_payment_date: string | null
          payment_method: string | null
          plan_id: string
          start_date: string
          status: string
          stripe_subscription_id: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          end_date?: string | null
          id?: string
          last_payment_date?: string | null
          next_payment_date?: string | null
          payment_method?: string | null
          plan_id: string
          start_date: string
          status: string
          stripe_subscription_id?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          end_date?: string | null
          id?: string
          last_payment_date?: string | null
          next_payment_date?: string | null
          payment_method?: string | null
          plan_id?: string
          start_date?: string
          status?: string
          stripe_subscription_id?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "subscriptions_plan_id_fkey"
            columns: ["plan_id"]
            isOneToOne: false
            referencedRelation: "plans"
            referencedColumns: ["id"]
          },
        ]
      }
      user_achievements: {
        Row: {
          achievement_id: string
          id: string
          unlocked_at: string
          user_id: string
        }
        Insert: {
          achievement_id: string
          id?: string
          unlocked_at?: string
          user_id: string
        }
        Update: {
          achievement_id?: string
          id?: string
          unlocked_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_achievements_achievement_id_fkey"
            columns: ["achievement_id"]
            isOneToOne: false
            referencedRelation: "achievements"
            referencedColumns: ["id"]
          },
        ]
      }
      weight_records: {
        Row: {
          body_fat_percentage: number | null
          created_at: string
          hip_circumference: number | null
          id: string
          note: string | null
          record_date: string
          user_id: string
          waist_circumference: number | null
          weight: number
        }
        Insert: {
          body_fat_percentage?: number | null
          created_at?: string
          hip_circumference?: number | null
          id?: string
          note?: string | null
          record_date: string
          user_id: string
          waist_circumference?: number | null
          weight: number
        }
        Update: {
          body_fat_percentage?: number | null
          created_at?: string
          hip_circumference?: number | null
          id?: string
          note?: string | null
          record_date?: string
          user_id?: string
          waist_circumference?: number | null
          weight?: number
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
